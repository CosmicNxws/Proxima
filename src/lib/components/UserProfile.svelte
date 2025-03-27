<script>
    export let user;
  </script>
  
  <div class="profile">
    <h2>{user.name}</h2>
    <p>@{user.username}</p>
    <div class="stats">
      <span>Posts: {user.posts}</span>
      <span>Comments: {user.comments}</span>
    </div>
  </div>
  
  <style>
    .profile {
      background: #1e1e2f;
      padding: 16px;
      border-radius: 8px;
      text-align: center;
    }
  
    h2 {
      color: #00ffcc;
      font-size: 1.5rem;
    }
  
    p {
      color: #a0a0c0;
    }
  
    .stats {
      display: flex;
      justify-content: center;
      gap: 16px;
      margin-top: 8px;
    }
  
    .stats span {
      color: #00ffcc;
    }
  </style>