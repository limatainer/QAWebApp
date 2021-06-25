import { FormEvent, useState } from 'react'
import { Link, useHistory } from 'react-router-dom'

import illustrationImg from '../assets/images/illustration.svg'
import logoImg from '../assets/images/logo.svg';

import { Button } from '../components/Button';
import { database } from '../services/firebase';
import { useAuth } from '../hooks/useAuth';

import '../styles/auth.scss';

export function NewRoom() {
  const { user } = useAuth()
  const history = useHistory()
  const [newRoom, setNewRoom] = useState('');

  async function handleCreateRoom(event: FormEvent) {
    event.preventDefault();

    if (newRoom.trim() === '') { //previnir que o usuario escreva um nome com espaços
      return;
    }

    const roomRef = database.ref('rooms'); //essa categoria rooms criada no datase aparecera assim no meu realtimedatabase no firebase

    const firebaseRoom = await roomRef.push({
      title: newRoom,
      authorId: user?.id, //tem ? porque por padrao vem como undefined
    })

    history.push(`/rooms/${firebaseRoom.key}`) //esse key e o id inserido que ta la no banco de dados de quem criou a sala
  }

  return (
    <div id="page-auth">
      <aside>
        <img src={illustrationImg} alt="Ilustração simbolizando perguntas e respostas" />
        <strong>Place here and get control of what is important</strong>
        <p>Share and control your memories</p>
      </aside>
      <main>
        <div className="main-content">
          <img src={logoImg} alt="Letmeask" />
          <h2>Create new memories</h2>
          <form onSubmit={handleCreateRoom}>
            <input 
              type="text"
              placeholder="Set a name to remember"
              onChange={event => setNewRoom(event.target.value)}
              value={newRoom}
            />
            <Button type="submit">
              Criar sala
            </Button>
          </form>
          <p>
            Already have a memory? <Link to="/">click here</Link>
          </p>
        </div>
      </main>
    </div>
  )
}