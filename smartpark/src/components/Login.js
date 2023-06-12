

const Login = () => {

    const onLogin = (e) => {
        e.preventDefault()
        const userId = document.getElementById('usuario').value
        const senha = document.getElementById('senha').value
        if (userId == '' || senha == '') {
            alert('É necessário preencher os dois campos')
        }
        else {
            alert(`Login feito com sucesso. Bem vindo ${userId}`)
        }



    }
    return (
        <form onSubmit={onLogin}>
            <label for="usuario">Usuario</label>
            <input type="text" id="usuario" />
            <label for="senha">Senha</label>
            <input type="password" id="senha" />
            <button>login</button>
        </form>
    )
}

export default Login