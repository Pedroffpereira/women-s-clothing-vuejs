<script>
</script>

<template>
  <nav>
    <ul class="nav">
      <li class="nav-item">
        <a class="nav-link active" aria-current="page" href="#">Home</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">List</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Contacts</a>
      </li>
      
      <li class="nav-item">
        <a class="nav-link" href="#">Car</a>
      </li>
    </ul>

  </nav>
  <header>
    <img src="https://fakeimg.pl/1920x1080/" alt="">
  </header>
  <main class="container">
    <router-view />
  </main>
  <footer></footer>
</template>
