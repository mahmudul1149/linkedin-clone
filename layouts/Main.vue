<template>
  <div class="profile">
    <div class="border">
      <div class="profile-post">
        <div class="imagediv">
          <img src="../assets/image/profie.png" alt="" />
        </div>
        <input
          type="text"
          name=""
          id=""
          placeholder="Ask your network for advice"
        />
      </div>
      <div class="share-box">
        <button class="flex-item">
             <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="#378FE9" class="mercado-match" width="24" height="24" focusable="false">
  <path d="M19 4H5a3 3 0 00-3 3v10a3 3 0 003 3h14a3 3 0 003-3V7a3 3 0 00-3-3zm1 13a1 1 0 01-.29.71L16 14l-2 2-6-6-4 4V7a1 1 0 011-1h14a1 1 0 011 1zm-2-7a2 2 0 11-2-2 2 2 0 012 2z"></path>
</svg>
    <span>Photo</span>
        </button>
        <button class="flex-item" aria-label="Add a video" id="ember328" >  <li-icon aria-hidden="true" type="video-icon" class="artdeco-button__icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="#5F9B41" class="mercado-match" width="24" height="24" focusable="false">
  <path d="M19 4H5a3 3 0 00-3 3v10a3 3 0 003 3h14a3 3 0 003-3V7a3 3 0 00-3-3zm-9 12V8l6 4z"></path>
</svg></li-icon>

<span class="artdeco-button__text">
    Video
</span></button>
<a class="flex-item" href="#" id="ember329"  aria-label="Create an event">
          <li-icon aria-hidden="true" type="calendar" size="medium"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="#C37D16" class="mercado-match" width="24" height="24" focusable="false">
  <path d="M3 3v15a3 3 0 003 3h12a3 3 0 003-3V3zm13 1.75A1.25 1.25 0 1114.75 6 1.25 1.25 0 0116 4.75zm-8 0A1.25 1.25 0 116.75 6 1.25 1.25 0 018 4.75zM19 18a1 1 0 01-1 1H6a1 1 0 01-1-1V9h14zm-5.9-3a1 1 0 00-1-1H12a3.12 3.12 0 00-1 .2l-1-.2v-3h3.9v1H11v1.15a3.7 3.7 0 011.05-.15 1.89 1.89 0 012 1.78V15a1.92 1.92 0 01-1.84 2H12a1.88 1.88 0 01-2-1.75 1 1 0 010-.25h1a.89.89 0 001 1h.1a.94.94 0 001-.88z"></path>
</svg></li-icon>
          <span class="share-box-feed-entry-toolbar__item-text">
            Event
          </span>
        </a>
        <a class="flex-item" href="#">
          <li-icon aria-hidden="true" type="content-align-left" size="medium"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="#E16745" class="mercado-match" width="24" height="24" focusable="false">
  <path d="M21 3v2H3V3zm-6 6h6V7h-6zm0 4h6v-2h-6zm0 4h6v-2h-6zM3 21h18v-2H3zM13 7H3v10h10z"></path>
</svg></li-icon>
          <span class="share-box-feed-entry-toolbar__item-text">
            Write article
          </span>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
.profile {
  border-radius: 10px;
  border: 1px solid rgba(0, 0, 0, 0.3);
  background: White;
  padding: .4rem !important;


}
.profile .profile-post {
  display: flex;
  align-items: center;
  box-sizing: border-box;
}

.profile .profile-post .imagediv img {
  width: 50px;
  height: 50px;
  border-radius: 50%;
}
.profile .profile-post input {
  width: 100%;
  padding: 0.8rem 1rem;
  box-sizing: border-box;
  border: 1px solid gray;
  border-radius: 36px;
}
.profile .profile-post input::placeholder {
  color: rgb(83, 80, 80);
  font-weight: 500;
}
.profile .profile-post input:hover {
  background: #EBEBEB;
}
li {
  list-style: none;
}
.share-box {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
button {
  border: none;
  outline: none;
  background: transparent;
}
.flex-item {
  display: flex;
  align-items: center;
  gap: .4rem;
     padding: .6rem .5rem;

}
.flex-item:hover {
  background: #EBEBEB;
 
}
.flex-item span {
  color: #333;
  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
}
</style>