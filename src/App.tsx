import { Envelope, Lock } from 'phosphor-react';

import { Heading } from './components/DataDisplay/Typography/Heading';
import { Text } from './components/DataDisplay/Typography/Text';
import { Button } from './components/Inputs/Buttons/Button';
import { Checkbox } from './components/Inputs/Checkbox';
import { TextInput } from './components/Inputs/TextFields/TextInput';
import { Logo } from './Logo';

import './styles/global.css';

export function App() {
  return (
    <div className="w-screen h-screen bg-gray-900 flex flex-col items-center justify-center text-gray-100">
      <header className="flex flex-col items-center">
        <Logo />
        <Heading size="lg" className="mb-1">Ignite Lab</Heading>
        <Text size="lg" className="text-gray-400">Faça login e comece a usar!</Text>
      </header>
      <form className="flex flex-col gap-4 items-stretch w-full max-w-sm mt-10">
        <label htmlFor="email" className="flex flex-col gap-3">
          <Text className="font-semibold">Endereço de e-mail</Text>
          <TextInput.Root>
            <TextInput.Icon>
              <Envelope />
            </TextInput.Icon>
            <TextInput.Input type="email" placeholder="Digite seu e-mail" />
          </TextInput.Root>
        </label>
        <label htmlFor="email" className="flex flex-col gap-3">
          <Text className="font-semibold">Sua senha</Text>
          <TextInput.Root>
            <TextInput.Icon>
              <Lock />
            </TextInput.Icon>
            <TextInput.Input type="password" placeholder="*******" />
          </TextInput.Root>
        </label>

        <label htmlFor="remember" className="flex items-center gap-2">
          <Checkbox id="remember" />
          <Text size="sm" className="text-gray-200">Lembrar de mim por 30 dias</Text>
        </label>

        <div className="flex flex-col items-center gap-4 mt-6">
          <Button type="submit">Entrar na plataforma</Button>
          <Text size="sm" asChild>
            <a href="" className="text-gray-400 underline mt-2 hover:text-gray-200">Esqueceu sua senha?</a>
          </Text>
          <Text size="sm" asChild>
            <a href="" className="text-gray-400 underline hover:text-gray-200">Não possui conta? Crie uma agora!</a>
          </Text>
        </div>
      </form>
    </div>
  );
}
