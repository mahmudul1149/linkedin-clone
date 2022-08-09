<template>
  <div>
    <header id="header" class="container">
      <div class="global-nav-search">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          data-supported-dps="24x24"
          fill="#0A66C2"
          class="mercado-match"
          width="40"
          height="40"
          focusable="false"
        >
          <path
            d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"
          ></path>
        </svg>
        <div class="search-box">
          <input type="text" class="input-search" name="" id="" placeholder="Search" />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            data-supported-dps="16x16"
            fill="#333"
            class="mercado-match search"
            width="16"
            height="16"
            focusable="false"
          >
            <path
              d="M14.56 12.44L11.3 9.18a5.51 5.51 0 10-2.12 2.12l3.26 3.26a1.5 1.5 0 102.12-2.12zM3 6.5A3.5 3.5 0 116.5 10 3.5 3.5 0 013 6.5z"
            ></path>
          </svg>
        </div>
      </div>
      <div class="flex-nav">
        <nav>
          <ul class="links">
            <li>
              <nuxt-link to="#" class="nuxt">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  data-supported-dps="24x24"
                  fill="currentColor"
                  class="mercado-match"
                  width="24"
                  height="24"
                  focusable="false"
                >
                  <path
                    d="M23 9v2h-2v7a3 3 0 01-3 3h-4v-6h-4v6H6a3 3 0 01-3-3v-7H1V9l11-7 5 3.18V2h3v5.09z"
                  ></path>
                </svg>
                <span>Home</span></nuxt-link
              >
            </li>
            <li>
              <nuxt-link to="/feed" class="nuxt">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  data-supported-dps="24x24"
                  fill="currentColor"
                  class="mercado-match"
                  width="24"
                  height="24"
                  focusable="false"
                >
                  <path
                    d="M12 16v6H3v-6a3 3 0 013-3h3a3 3 0 013 3zm5.5-3A3.5 3.5 0 1014 9.5a3.5 3.5 0 003.5 3.5zm1 2h-2a2.5 2.5 0 00-2.5 2.5V22h7v-4.5a2.5 2.5 0 00-2.5-2.5zM7.5 2A4.5 4.5 0 1012 6.5 4.49 4.49 0 007.5 2z"
                  ></path>
                </svg>
               <span> My Network</span></nuxt-link
              >
            </li>
            <li>
              <nuxt-link to="#" class="nuxt">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  data-supported-dps="24x24"
                  fill="currentColor"
                  class="mercado-match"
                  width="24"
                  height="24"
                  focusable="false"
                >
                  <path
                    d="M17 6V5a3 3 0 00-3-3h-4a3 3 0 00-3 3v1H2v4a3 3 0 003 3h14a3 3 0 003-3V6zM9 5a1 1 0 011-1h4a1 1 0 011 1v1H9zm10 9a4 4 0 003-1.38V17a3 3 0 01-3 3H5a3 3 0 01-3-3v-4.38A4 4 0 005 14z"
                  ></path>
                </svg>
                <span>Jobs</span></nuxt-link
              >
            </li>
            <li>
              <nuxt-link to="#" class="nuxt">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  data-supported-dps="24x24"
                  fill="currentColor"
                  class="mercado-match"
                  width="24"
                  height="24"
                  focusable="false"
                >
                  <path
                    d="M16 4H8a7 7 0 000 14h4v4l8.16-5.39A6.78 6.78 0 0023 11a7 7 0 00-7-7zm-8 8.25A1.25 1.25 0 119.25 11 1.25 1.25 0 018 12.25zm4 0A1.25 1.25 0 1113.25 11 1.25 1.25 0 0112 12.25zm4 0A1.25 1.25 0 1117.25 11 1.25 1.25 0 0116 12.25z"
                  ></path>
                </svg>
                <span>Messaging</span></nuxt-link
              >
            </li>
            <li>
              <nuxt-link to="#" class="nuxt">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  data-supported-dps="24x24"
                  fill="currentColor"
                  class="mercado-match"
                  width="24"
                  height="24"
                  focusable="false"
                >
                  <path
                    d="M22 19h-8.28a2 2 0 11-3.44 0H2v-1a4.52 4.52 0 011.17-2.83l1-1.17h15.7l1 1.17A4.42 4.42 0 0122 18zM18.21 7.44A6.27 6.27 0 0012 2a6.27 6.27 0 00-6.21 5.44L5 13h14z"
                  ></path>
                </svg>
                <span>Notifications</span></nuxt-link
              >
            </li>
            <li class="profile-me">
              <img
                width="24"
                src="https://media-exp1.licdn.com/dms/image/C4E03AQElME9Xlfo1fg/profile-displayphoto-shrink_100_100/0/1653053988341?e=1665619200&amp;v=beta&amp;t=vZbFguEJ8RxITqTXfE8q7A5Q9aRtIzlqEz79A0SYsR8"
                height="24"
                alt="MD Mahmudul Islam"
                id="ember17"
                class="global-nav__me-photo ember-view"
              />
              <nuxt-link to="#" class="nuxt-me">
                Me
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  data-supported-dps="16x16"
                  fill="currentColor"
                  class="mercado-match"
                  width="16"
                  height="16"
                  focusable="false"
                >
                  <path d="M8 11L3 6h10z" fill-rule="evenodd"></path>
                </svg>
              </nuxt-link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  </div>
</template>

<style>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

.container {
  max-width: 1200px;
  margin: auto;
  padding: 0 2rem;
}
ul {
  list-style: none;
}
a {
  text-decoration: none;
}
.links a {
  font-size: 0.8rem;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
}

header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 60px;
}
.global-nav-search {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}
.search-box {
  width: 270px;
  height: 35px;
  border-radius: 5px;
  background: #eef3f8;
  border-radius: 5px;
  position: relative;
}
.search-box input {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: transparent;
  border: none;
  outline: none;
  font-size: 1.1rem;
  padding: 0 2.3rem;
}
.search {
  position: absolute;
  width: 20px;
  height: 20px;
  top: 7px;
  left: 10px;
}
.links {
  display: flex;
  gap: 1.1rem;
  align-items: center;
  align-items: center;
}
.nuxt {
  padding: 0.8rem 0;
  display: flex;
  align-items: center;
  flex-direction: column;
  color: rgb(105, 102, 102);
  transition: 0.3s ease-in;
  position: relative;
  overflow: hidden;
}

.profile-me {
  display: flex;
  align-items: center;
  flex-direction: column;
}
.nuxt-me {
  display: flex;
  align-items: center;
}

.nuxt::after {
  content: "";
  position: absolute;
  bottom: 0 !important;
  left: 0;
  width: 250px !important;
  height: 2px;
  background: #191919;
  transform: scaleX(0);
  transform-origin: right;
  transition: transform 700ms ease-in;
}
.nuxt:hover::after {
  transform: scaleX(1);
 transform-origin: left;
}
.nuxt:hover {
  color: #191919;
}
@media screen and (max-width: 700px ) {
      .links span
      {
        display: none;
      }
      .search-box {
        display: none;
      }
      .nuxt::after {
        display: none;
      }

} 
</style>