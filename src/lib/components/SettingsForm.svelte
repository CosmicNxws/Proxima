<script>
    export let user;
    let name = user.name;
    let email = user.email;
  
    const handleSave = () => {
      // Logic to save settings
      console.log('Saving settings:', { name, email });
    };
  </script>
  
  <div class="settings-form">
    <h2>Settings</h2>
    <label>
      Name:
      <input bind:value={name} />
    </label>
    <label>
      Email:
      <input bind:value={email} />
    </label>
    <button on:click={handleSave}>Save</button>
  </div>
  
  <style>
    .settings-form {
      background: #1e1e2f;
      padding: 16px;
      border-radius: 8px;
      color: #00ffcc;
    }
  
    label {
      display: block;
      margin-bottom: 8px;
    }
  
    input {
      background: #2a2a40;
      color: #fff;
      border: none;
      border-radius: 4px;
      padding: 8px;
      width: 100%;
    }
  
    button {
      background: #00ffcc;
      color: #1e1e2f;
      border: none;
      border-radius: 4px;
      padding: 8px 16px;
      margin-top: 8px;
      cursor: pointer;
    }
  </style>