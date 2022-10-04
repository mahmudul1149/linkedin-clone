<template>
  <div class="add-feed">
    <div class="title-feed">
      <span>Add to your feed</span>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 16 16"
        data-supported-dps="16x16"
        fill="currentColor"
        class="mercado-match"
        width="16"
        cursor="pointer"
        height="16"
        focusable="false"
      >
        <path
          d="M12 2H4a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2V4a2 2 0 00-2-2zm-3 8v2H7.5A1.5 1.5 0 016 10.5a1.56 1.56 0 01.1-.5l1.08-3h2.13l-1.09 3zm0-3.75A1.25 1.25 0 1110.25 5 1.25 1.25 0 019 6.25z"
        ></path>
      </svg>
    </div>
    <div class="feed-box">
      <img src="~/assets/image/nasim.jpg" alt="" />
      <div>
        <h3>Nasim Uddin</h3>
        <a href="#"> Ceo @ Mullo | Rasing pre-Seed</a>
        <button class="btn-follow">
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
            <path d="M14 9H9v5H7V9H2V7h5V2h2v5h5z"></path></svg
          >Follow
        </button>
      </div>
    </div>
    <div class="feed-box">
      <img src="../assets/image/toptal.jpg" alt="" />
      <div>
        <h3>Toptal</h3>
        <a href="#">
          Web3 Builder / Founder, Wind.app & Pathao / Forbes 30U30</a
        >
        <button class="btn-follow">
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
            <path d="M14 9H9v5H7V9H2V7h5V2h2v5h5z"></path></svg
          >Follow
        </button>
      </div>
    </div>
    <div class="feed-box">
      <img src="../assets/image/connekt.jpg" alt="" />
      <div>
        <h3>Connekt Studio</h3>
        <a href="#"> Software Development Bogra Rajshahi</a>
        <button class="btn-follow">
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
            <path d="M14 9H9v5H7V9H2V7h5V2h2v5h5z"></path></svg
          >Follow
        </button>
      </div>
    </div>
    <button class="view-btn">
      <a href="#">View all recommendations</a
      ><svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 16 16"
        class="mercado-match"
        data-supported-dps="16x16"
        fill="currentColor"
        width="16"
        height="16"
        focusable="false"
      >
        <path d="M11.45 3L15 8l-3.55 5H9l2.84-4H2V7h9.84L9 3z"></path>
      </svg>
    </button>
  </div>
</template>

<script>
export default {};
</script>

<style>
.add-feed {
  background: white;
  border-radius: 10px;
}

.add-feed {
}

.add-feed .feed-box {
  display: flex;
  padding: 0.5rem;
  padding: 1rem;
}

.add-feed .title-feed {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.5rem;
}

.add-feed .feed-box img {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-right: 0.5rem;
  cursor: pointer;
}

.add-feed .feed-box h3 {
  font-size: 0.8rem;
}

.add-feed .feed-box a {
  font-size: 12px;
  color: rgb(56, 44, 44);
  padding: 0.4rem 0;
  line-height: 1.1rem;
}

.btn-follow {
  display: flex;
  align-items: center;
  gap: 0.2rem;
  border: 1px solid #333;
  border-radius: 35px;
  padding: 0.4rem 0.9rem;
  font-size: 1.1rem;
  cursor: pointer;
}

.btn-follow:hover {
  background: #ebebeb;
}

.view-btn {
  outline: none;
  display: flex;
  align-items: center;
  padding: 1rem 1.5rem;
  gap: 0.4rem;
  color: #666666;
  font-size: 0.9rem;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
}
</style>
