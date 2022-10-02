

const app = document.getElementById('app');

export default function home() {

    app.innerHTML = `
    <div class='auth'>

    <form class="auth_form">

    <h1>Login Page</h1>

        <div class="form_group">
            <label>Email</label>
            <input type="email" id="email" required/>
        </div>

        <div class="form_group">
            <label>Password</label>
            <input type="password" id="password" required/>
        </div>

        <button type="submit">Login</button>

    </form>

    </div>
    `



} 