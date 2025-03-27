<script>
    import { login } from '../../../lib/stores/authStore.js';
    let email = '';
    let password = '';
  
    const handleLogin = async () => {
      await login(email, password);
    };
  </script>
  
  <div class="login-form">
    <h2>Login</h2>
    <label>
      Email:
      <input bind:value={email} type="email" />
    </label>
    <label>
      Password:
      <input bind:value={password} type="password" />
    </label>
    <button on:click={handleLogin}>Login</button>
  </div>
  
  <style>
    .login-form {
      max-width: 400px;
      margin: 0 auto;
      padding: 16px;
      background: #1e1e2f;
      border-radius: 8px;
      color: #00ffcc;
    }
  
    label {
      display: block;
      margin-bottom: 8px;
    }
  
    input {
      width: 100%;
      padding: 8px;
      margin-bottom: 8px;
      background: #2a2a40;
      color: #fff;
      border: none;
      border-radius: 4px;
    }
  
    button {
      background: #00ffcc;
      color: #1e1e2f;
      border: none;
      border-radius: 4px;
      padding: 8px 16px;
      cursor: pointer;
    }
  </style>