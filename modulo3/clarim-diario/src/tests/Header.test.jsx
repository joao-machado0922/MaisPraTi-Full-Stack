import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { AuthProvider } from '../contexts/AuthContext';
import Header from '../components/Header/Header';

function renderizarHeader() {
    render(
        <MemoryRouter>
            <AuthProvider>
                <Header tema='light' aoAlterarTema={() => {}} />
            </AuthProvider>
        </MemoryRouter>
    )
}

describe('Header', () => {
    beforeEach(() => localStorage.clear());

    it('mostra o link Entrar quando ninguém está logado', () => {
        renderizarHeader();
        expect(screen.getByText('Entrar')).toBeInTheDocument();
    })

    it('monstra a saudação quando há usuário salvo', () => {
        localStorage.setItem('usuario', JSON.stringify({nome: 'Nicolau'}));
        renderizarHeader();
        expect(screen.getByText(/Nicolau/)).toBeInTheDocument();
    })

})
