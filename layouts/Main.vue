<template>
  <div>
    <div class="profile">
      <div class="border">
        <div class="profile-post">
          <div class="imagediv">
            <img src="../assets/image/profile-linked.png" alt="" />
          </div>
          <input
            type="text"
            name=""
            id=""
            @change="addTodos"
            placeholder="Ask your network for advice"
            v-model="text"
          />
        </div>
        <div class="share-box">
          <button class="flex-item">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              data-supported-dps="24x24"
              fill="#378FE9"
              class="mercado-match"
              width="24"
              height="24"
              focusable="false"
            >
              <path
                d="M19 4H5a3 3 0 00-3 3v10a3 3 0 003 3h14a3 3 0 003-3V7a3 3 0 00-3-3zm1 13a1 1 0 01-.29.71L16 14l-2 2-6-6-4 4V7a1 1 0 011-1h14a1 1 0 011 1zm-2-7a2 2 0 11-2-2 2 2 0 012 2z"
              ></path>
            </svg>
            <span class="btn-text">Photo</span>
          </button>
          <button class="flex-item" aria-label="Add a video" id="ember328">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              data-supported-dps="24x24"
              fill="#5F9B41"
              class="mercado-match"
              width="24"
              height="24"
              focusable="false"
            >
              <path
                d="M19 4H5a3 3 0 00-3 3v10a3 3 0 003 3h14a3 3 0 003-3V7a3 3 0 00-3-3zm-9 12V8l6 4z"
              ></path>
            </svg>

            <span class="artdeco-button__text"> Video </span>
          </button>
          <a
            class="flex-item"
            href="#"
            id="ember329"
            aria-label="Create an event"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              data-supported-dps="24x24"
              fill="#C37D16"
              class="mercado-match"
              width="24"
              height="24"
              focusable="false"
            >
              <path
                d="M3 3v15a3 3 0 003 3h12a3 3 0 003-3V3zm13 1.75A1.25 1.25 0 1114.75 6 1.25 1.25 0 0116 4.75zm-8 0A1.25 1.25 0 116.75 6 1.25 1.25 0 018 4.75zM19 18a1 1 0 01-1 1H6a1 1 0 01-1-1V9h14zm-5.9-3a1 1 0 00-1-1H12a3.12 3.12 0 00-1 .2l-1-.2v-3h3.9v1H11v1.15a3.7 3.7 0 011.05-.15 1.89 1.89 0 012 1.78V15a1.92 1.92 0 01-1.84 2H12a1.88 1.88 0 01-2-1.75 1 1 0 010-.25h1a.89.89 0 001 1h.1a.94.94 0 001-.88z"
              ></path>
            </svg>
            <span class="share-box-feed-entry-toolbar__item-text btn-text">
              Event
            </span>
          </a>
          <a class="flex-item" href="#">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              data-supported-dps="24x24"
              fill="#E16745"
              class="mercado-match"
              width="24"
              height="24"
              focusable="false"
            >
              <path
                d="M21 3v2H3V3zm-6 6h6V7h-6zm0 4h6v-2h-6zm0 4h6v-2h-6zM3 21h18v-2H3zM13 7H3v10h10z"
              ></path>
            </svg>
            <span class="share-box-feed-entry-toolbar__item-text btn-text">
              Write article
            </span>
          </a>
        </div>
      </div>
    </div>

    <div class="show-profile sticky" v-for="item in addItems" :key="item.id">
      <div class="box">
        <img
          src="../assets/image/profile-linked.png"
          alt=""
          class="profile-photo"
        />
        <div class="mt-1">
          <a>{{ user.displayName }}</a>
          <br />

          <p>{{ user.email }}</p>
        </div>
      </div>
      <p class="posting-title">{{ item.post }}</p>

      <div class="react">
        <span
          class="reactions-react-button feed-shared-social-action-bar__action-button"
        >
          <!---->
          <button
            aria-pressed="false"
            aria-label="Like Abdun Nur Wasit’s post"
            id="ember57"
            class="artdeco-button artdeco-button--muted artdeco-button--4 artdeco-button--tertiary ember-view social-actions-button react-button__trigger"
          >
            <!---->
            <span class="ardho">
              <div class="flex-wrap justify-center align-items-center">
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
                    d="M19.46 11l-3.91-3.91a7 7 0 01-1.69-2.74l-.49-1.47A2.76 2.76 0 0010.76 1 2.75 2.75 0 008 3.74v1.12a9.19 9.19 0 00.46 2.85L8.89 9H4.12A2.12 2.12 0 002 11.12a2.16 2.16 0 00.92 1.76A2.11 2.11 0 002 14.62a2.14 2.14 0 001.28 2 2 2 0 00-.28 1 2.12 2.12 0 002 2.12v.14A2.12 2.12 0 007.12 22h7.49a8.08 8.08 0 003.58-.84l.31-.16H21V11zM19 19h-1l-.73.37a6.14 6.14 0 01-2.69.63H7.72a1 1 0 01-1-.72l-.25-.87-.85-.41A1 1 0 015 17l.17-1-.76-.74A1 1 0 014.27 14l.66-1.09-.73-1.1a.49.49 0 01.08-.7.48.48 0 01.34-.11h7.05l-1.31-3.92A7 7 0 0110 4.86V3.75a.77.77 0 01.75-.75.75.75 0 01.71.51L12 5a9 9 0 002.13 3.5l4.5 4.5H19z"
                  ></path>
                </svg>

                <span
                  aria-hidden="true"
                  class="artdeco-button__text react-button__text"
                >
                  Like
                </span>
              </div>
            </span>
          </button>

          <button
            aria-label="Open reactions menu"
            id="ember58"
            class="artdeco-button artdeco-button--muted artdeco-button--2 artdeco-button--tertiary ember-view reactions-menu__trigger"
          >
            <!---->
            <span class="artdeco-button__text"> </span>
          </button>
        </span>
        <span class="comment feed-shared-social-action-bar__action-button">
          <span
            tabindex="-1"
            id="ember59"
            class="artdeco-hoverable-trigger artdeco-hoverable-trigger--content-placed-top artdeco-hoverable-trigger--is-hoverable ember-view"
          >
            <div>
              <button
                aria-label="Comment on Abdun Nur Wasit’s post"
                aria-describedby="artdeco-hoverable-artdeco-gen-42"
                id="ember60"
                class="artdeco-button artdeco-button--muted artdeco-button--4 artdeco-button--tertiary ember-view social-actions-button comment-button flex-wrap"
              >
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
                    d="M7 9h10v1H7zm0 4h7v-1H7zm16-2a6.78 6.78 0 01-2.84 5.61L12 22v-4H8A7 7 0 018 4h8a7 7 0 017 7zm-2 0a5 5 0 00-5-5H8a5 5 0 000 10h6v2.28L19 15a4.79 4.79 0 002-4z"
                  ></path>
                </svg>

                <span class="artdeco-button__text"> Comment </span>
              </button>
            </div>
            <div id="artdeco-gen-42" class="ember-view">
              <div id="ember62" class="ember-view"></div>
            </div>
          </span>
        </span>
        <span class="feed-shared-social-action-bar__action-button" id="ember63">
          <div
            id="ember64"
            class="artdeco-dropdown artdeco-dropdown--placement-bottom artdeco-dropdown--justification-right ember-view"
          >
            <span
              tabindex="-1"
              id="ember65"
              class="artdeco-hoverable-trigger artdeco-hoverable-trigger--content-placed-top artdeco-hoverable-trigger--is-hoverable ember-view"
            >
              <button
                aria-expanded="false"
                aria-label=""
                id="ember66"
                class="artdeco-dropdown__trigger artdeco-dropdown__trigger--placement-bottom ember-view artdeco-button social-actions-button social-reshare-button flex-wrap artdeco-button--muted artdeco-button--4 artdeco-button--tertiary"
                aria-describedby="artdeco-hoverable-artdeco-gen-43"
                type="button"
                tabindex="0"
              >
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
                    d="M23 12l-4.61 7H16l4-6H8a3.92 3.92 0 00-4 3.84V17a4 4 0 00.19 1.24L5.12 21H3l-.73-2.22A6.4 6.4 0 012 16.94 6 6 0 018 11h12l-4-6h2.39z"
                  ></path>
                </svg>
                <span class="artdeco-button__text">Share</span>

                <!---->
              </button>

              <div
                tabindex="-1"
                aria-hidden="true"
                id="ember67"
                class="artdeco-dropdown__content artdeco-dropdown--is-dropdown-element artdeco-dropdown__content--justification-right artdeco-dropdown__content--placement-bottom ember-view social-reshare-button__share-dropdown-content"
              >
                <!---->
              </div>

              <div id="artdeco-gen-43" class="ember-view">
                <div id="ember69" class="ember-view"></div>
              </div>
            </span>
          </div>

          <div>
            <!---->
          </div>
          <!----></span
        >
        <div class="feed-shared-social-action-bar__action-button">
          <span
            tabindex="-1"
            id="ember70"
            class="artdeco-hoverable-trigger artdeco-hoverable-trigger--content-placed-top artdeco-hoverable-trigger--is-hoverable ember-view"
          >
            <div class="entry-point">
              <div></div>

              <button
                class="social-actions-button send-privately-button artdeco-button artdeco-button--4 artdeco-button--tertiary flex-wrap artdeco-button--muted send-privately-button"
                aria-describedby="artdeco-hoverable-artdeco-gen-44"
                type="button"
              >
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
                    d="M21 3L0 10l7.66 4.26L16 8l-6.26 8.34L14 24l7-21z"
                  ></path>
                </svg>
                <span class="artdeco-button__text">Send</span>
              </button>
            </div>
            <div id="artdeco-gen-44" class="ember-view">
              <div id="ember72" class="ember-view"></div>
            </div>
          </span>
        </div>
      </div>
    </div>
    <div class="show-profile">
      <div class="box">
        <img src="../assets/image/profie.png" alt="" class="profile-photo" />
        <div class="mt-1">
          <a>Md Mahmudul islam</a>
          <br />
          <p>imdmahmudul237@gmail.com</p>
        </div>
      </div>
      <p class="posting-title">I am a front end developer</p>

      <div class="react">
        <span
          class="reactions-react-button feed-shared-social-action-bar__action-button"
        >
          <!---->
          <button
            aria-pressed="false"
            aria-label="Like Abdun Nur Wasit’s post"
            id="ember57"
            class="artdeco-button artdeco-button--muted artdeco-button--4 artdeco-button--tertiary ember-view social-actions-button react-button__trigger"
          >
            <!---->
            <span>
              <div class="flex-wrap justify-center align-items-center">
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
                    d="M19.46 11l-3.91-3.91a7 7 0 01-1.69-2.74l-.49-1.47A2.76 2.76 0 0010.76 1 2.75 2.75 0 008 3.74v1.12a9.19 9.19 0 00.46 2.85L8.89 9H4.12A2.12 2.12 0 002 11.12a2.16 2.16 0 00.92 1.76A2.11 2.11 0 002 14.62a2.14 2.14 0 001.28 2 2 2 0 00-.28 1 2.12 2.12 0 002 2.12v.14A2.12 2.12 0 007.12 22h7.49a8.08 8.08 0 003.58-.84l.31-.16H21V11zM19 19h-1l-.73.37a6.14 6.14 0 01-2.69.63H7.72a1 1 0 01-1-.72l-.25-.87-.85-.41A1 1 0 015 17l.17-1-.76-.74A1 1 0 014.27 14l.66-1.09-.73-1.1a.49.49 0 01.08-.7.48.48 0 01.34-.11h7.05l-1.31-3.92A7 7 0 0110 4.86V3.75a.77.77 0 01.75-.75.75.75 0 01.71.51L12 5a9 9 0 002.13 3.5l4.5 4.5H19z"
                  ></path>
                </svg>

                <span
                  aria-hidden="true"
                  class="like-btn artdeco-button__text react-button__text"
                >
                  Like
                </span>
              </div>
            </span>
          </button>

          <button
            aria-label="Open reactions menu"
            id="ember58"
            class="artdeco-button artdeco-button--muted artdeco-button--2 artdeco-button--tertiary ember-view reactions-menu__trigger"
          >
            <!---->
            <span class="artdeco-button__text"> </span>
          </button>
        </span>
        <span class="comment feed-shared-social-action-bar__action-button">
          <span
            tabindex="-1"
            id="ember59"
            class="artdeco-hoverable-trigger artdeco-hoverable-trigger--content-placed-top artdeco-hoverable-trigger--is-hoverable ember-view"
          >
            <div>
              <button
                aria-label="Comment on Abdun Nur Wasit’s post"
                aria-describedby="artdeco-hoverable-artdeco-gen-42"
                id="ember60"
                class="artdeco-button artdeco-button--muted artdeco-button--4 artdeco-button--tertiary ember-view social-actions-button comment-button flex-wrap"
              >
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
                    d="M7 9h10v1H7zm0 4h7v-1H7zm16-2a6.78 6.78 0 01-2.84 5.61L12 22v-4H8A7 7 0 018 4h8a7 7 0 017 7zm-2 0a5 5 0 00-5-5H8a5 5 0 000 10h6v2.28L19 15a4.79 4.79 0 002-4z"
                  ></path>
                </svg>

                <span class="artdeco-button__text"> Comment </span>
              </button>
            </div>
            <div id="artdeco-gen-42" class="ember-view">
              <div id="ember62" class="ember-view"></div>
            </div>
          </span>
        </span>
        <span class="feed-shared-social-action-bar__action-button" id="ember63">
          <div
            id="ember64"
            class="artdeco-dropdown artdeco-dropdown--placement-bottom artdeco-dropdown--justification-right ember-view"
          >
            <span
              tabindex="-1"
              id="ember65"
              class="artdeco-hoverable-trigger artdeco-hoverable-trigger--content-placed-top artdeco-hoverable-trigger--is-hoverable ember-view"
            >
              <button
                aria-expanded="false"
                aria-label=""
                id="ember66"
                class="artdeco-dropdown__trigger artdeco-dropdown__trigger--placement-bottom ember-view artdeco-button social-actions-button social-reshare-button flex-wrap artdeco-button--muted artdeco-button--4 artdeco-button--tertiary"
                aria-describedby="artdeco-hoverable-artdeco-gen-43"
                type="button"
                tabindex="0"
              >
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
                    d="M23 12l-4.61 7H16l4-6H8a3.92 3.92 0 00-4 3.84V17a4 4 0 00.19 1.24L5.12 21H3l-.73-2.22A6.4 6.4 0 012 16.94 6 6 0 018 11h12l-4-6h2.39z"
                  ></path>
                </svg>
                <span class="artdeco-button__text">Share</span>

                <!---->
              </button>

              <div
                tabindex="-1"
                aria-hidden="true"
                id="ember67"
                class="artdeco-dropdown__content artdeco-dropdown--is-dropdown-element artdeco-dropdown__content--justification-right artdeco-dropdown__content--placement-bottom ember-view social-reshare-button__share-dropdown-content"
              >
                <!---->
              </div>

              <div id="artdeco-gen-43" class="ember-view">
                <div id="ember69" class="ember-view"></div>
              </div>
            </span>
          </div>

          <div>
            <!---->
          </div>
          <!----></span
        >
        <div class="feed-shared-social-action-bar__action-button">
          <span
            tabindex="-1"
            id="ember70"
            class="artdeco-hoverable-trigger artdeco-hoverable-trigger--content-placed-top artdeco-hoverable-trigger--is-hoverable ember-view"
          >
            <div class="entry-point">
              <div></div>

              <button
                class="social-actions-button send-privately-button artdeco-button artdeco-button--4 artdeco-button--tertiary flex-wrap artdeco-button--muted send-privately-button"
                aria-describedby="artdeco-hoverable-artdeco-gen-44"
                type="button"
              >
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
                    d="M21 3L0 10l7.66 4.26L16 8l-6.26 8.34L14 24l7-21z"
                  ></path>
                </svg>
                <span class="artdeco-button__text">Send</span>
              </button>
            </div>
            <div id="artdeco-gen-44" class="ember-view">
              <div id="ember72" class="ember-view"></div>
            </div>
          </span>
        </div>
      </div>
    </div>
    <div class="show-profile" v-for="item in items" :key="item">
      <div class="box">
        <img class="profile-image" :src="item.url" alt="" />
        <div class="mt-1">
          <a>{{ item.name }}</a>
          <br />

          <p>{{ item.title }}</p>
          <p></p>
        </div>
      </div>

      <img class="post-image" :src="item.profileurl" alt="" />

      <div class="react">
        <span
          class="reactions-react-button feed-shared-social-action-bar__action-button"
        >
          <!---->
          <button
            aria-pressed="false"
            aria-label="Like Abdun Nur Wasit’s post"
            id="ember57"
            class="artdeco-button artdeco-button--muted artdeco-button--4 artdeco-button--tertiary ember-view social-actions-button react-button__trigger"
          >
            <!---->
            <span class="like">
              <div class="flex-wrap justify-center align-items-center">
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
                    d="M19.46 11l-3.91-3.91a7 7 0 01-1.69-2.74l-.49-1.47A2.76 2.76 0 0010.76 1 2.75 2.75 0 008 3.74v1.12a9.19 9.19 0 00.46 2.85L8.89 9H4.12A2.12 2.12 0 002 11.12a2.16 2.16 0 00.92 1.76A2.11 2.11 0 002 14.62a2.14 2.14 0 001.28 2 2 2 0 00-.28 1 2.12 2.12 0 002 2.12v.14A2.12 2.12 0 007.12 22h7.49a8.08 8.08 0 003.58-.84l.31-.16H21V11zM19 19h-1l-.73.37a6.14 6.14 0 01-2.69.63H7.72a1 1 0 01-1-.72l-.25-.87-.85-.41A1 1 0 015 17l.17-1-.76-.74A1 1 0 014.27 14l.66-1.09-.73-1.1a.49.49 0 01.08-.7.48.48 0 01.34-.11h7.05l-1.31-3.92A7 7 0 0110 4.86V3.75a.77.77 0 01.75-.75.75.75 0 01.71.51L12 5a9 9 0 002.13 3.5l4.5 4.5H19z"
                  ></path>
                </svg>

                <span
                  aria-hidden="true"
                  class="artdeco-button__text react-button__text"
                >
                  Like
                </span>
              </div>
            </span>
          </button>

          <button
            aria-label="Open reactions menu"
            id="ember58"
            class="artdeco-button artdeco-button--muted artdeco-button--2 artdeco-button--tertiary ember-view reactions-menu__trigger"
          >
            <!---->
            <span class="artdeco-button__text"> </span>
          </button>
        </span>
        <span class="comment feed-shared-social-action-bar__action-button">
          <span
            tabindex="-1"
            id="ember59"
            class="artdeco-hoverable-trigger artdeco-hoverable-trigger--content-placed-top artdeco-hoverable-trigger--is-hoverable ember-view"
          >
            <div>
              <button
                aria-label="Comment on Abdun Nur Wasit’s post"
                aria-describedby="artdeco-hoverable-artdeco-gen-42"
                id="ember60"
                class="artdeco-button artdeco-button--muted artdeco-button--4 artdeco-button--tertiary ember-view social-actions-button comment-button flex-wrap"
              >
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
                    d="M7 9h10v1H7zm0 4h7v-1H7zm16-2a6.78 6.78 0 01-2.84 5.61L12 22v-4H8A7 7 0 018 4h8a7 7 0 017 7zm-2 0a5 5 0 00-5-5H8a5 5 0 000 10h6v2.28L19 15a4.79 4.79 0 002-4z"
                  ></path>
                </svg>

                <span class="artdeco-button__text"> Comment </span>
              </button>
            </div>
            <div id="artdeco-gen-42" class="ember-view">
              <div id="ember62" class="ember-view"></div>
            </div>
          </span>
        </span>
        <span class="feed-shared-social-action-bar__action-button" id="ember63">
          <div
            id="ember64"
            class="artdeco-dropdown artdeco-dropdown--placement-bottom artdeco-dropdown--justification-right ember-view"
          >
            <span
              tabindex="-1"
              id="ember65"
              class="artdeco-hoverable-trigger artdeco-hoverable-trigger--content-placed-top artdeco-hoverable-trigger--is-hoverable ember-view"
            >
              <button
                aria-expanded="false"
                aria-label=""
                id="ember66"
                class="artdeco-dropdown__trigger artdeco-dropdown__trigger--placement-bottom ember-view artdeco-button social-actions-button social-reshare-button flex-wrap artdeco-button--muted artdeco-button--4 artdeco-button--tertiary"
                aria-describedby="artdeco-hoverable-artdeco-gen-43"
                type="button"
                tabindex="0"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  cursor="pointer"
                  data-supported-dps="24x24"
                  fill="currentColor"
                  class="mercado-match"
                  width="24"
                  height="24"
                  focusable="false"
                >
                  <path
                    d="M23 12l-4.61 7H16l4-6H8a3.92 3.92 0 00-4 3.84V17a4 4 0 00.19 1.24L5.12 21H3l-.73-2.22A6.4 6.4 0 012 16.94 6 6 0 018 11h12l-4-6h2.39z"
                  ></path>
                </svg>
                <span class="artdeco-button__text">Share</span>

                <!---->
              </button>

              <div
                tabindex="-1"
                aria-hidden="true"
                id="ember67"
                class="artdeco-dropdown__content artdeco-dropdown--is-dropdown-element artdeco-dropdown__content--justification-right artdeco-dropdown__content--placement-bottom ember-view social-reshare-button__share-dropdown-content"
              >
                <!---->
              </div>

              <div id="artdeco-gen-43" class="ember-view">
                <div id="ember69" class="ember-view"></div>
              </div>
            </span>
          </div>

          <div>
            <!---->
          </div>
          <!----></span
        >
        <div class="feed-shared-social-action-bar__action-button">
          <span
            tabindex="-1"
            id="ember70"
            class="artdeco-hoverable-trigger artdeco-hoverable-trigger--content-placed-top artdeco-hoverable-trigger--is-hoverable ember-view"
          >
            <div class="entry-point">
              <div></div>

              <button
                class="social-actions-button send-privately-button artdeco-button artdeco-button--4 artdeco-button--tertiary flex-wrap artdeco-button--muted send-privately-button"
                aria-describedby="artdeco-hoverable-artdeco-gen-44"
                type="button"
              >
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
                    d="M21 3L0 10l7.66 4.26L16 8l-6.26 8.34L14 24l7-21z"
                  ></path>
                </svg>
                <span class="artdeco-button__text">Send</span>
              </button>
            </div>
            <div id="artdeco-gen-44" class="ember-view">
              <div id="ember72" class="ember-view"></div>
            </div>
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      text: "",
      addItems: [
        {
          post: "",
          completed: true,
        },
      ],

      item: {
        post: "",
      },
    };
  },
  computed: {
    items() {
      return this.$store.getters.items;
    },
    user() {
      return this.$store.state.user;
    },
  },

  methods: {
    addTodos() {
      this.addItems.unshift({ post: this.text });
      this.text = "";
    },
  },
  created() {
    this.$store.dispatch("initItem");
  },
  mounted() {
    this.$store.dispatch("initializeStore");
  },
};
</script>

<style>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
.mt-1 {
  margin-top: 0.4;
}

.profile {
  border-radius: 10px;
  border: 1px solid rgba(0, 0, 0, 0.3);
  background: White;
  padding: 0.4rem !important;
}

.profile .profile-post {
  display: flex;
  align-items: center;
  box-sizing: border-box;
}
.reactions-react-button {
  cursor: pointer;
}
.profile .profile-post .imagediv img {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  cursor: pointer;
}
.profile .profile-post input {
  width: 100%;
  padding: 0.8rem 1rem;
  box-sizing: border-box;
  border: 1px solid gray;
  outline: none;
  border-radius: 36px;
}
.show-profile .profile-photo {
  width: 45px;
  height: 45px;
  border-radius: 50%;
  line-height: 45px;
  text-align: center;
  color: white;
  cursor: pointer;
}
.show-profile .profile-photo .profile .profile-post input::placeholder {
  color: rgb(83, 80, 80);
  font-weight: 500;
}
.profile .profile-post input:hover {
  background: #ebebeb;
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
  gap: 0.4rem;
  padding: 0.6rem 0.5rem;
}
.flex-item:hover {
  background: #ebebeb;
}
button {
  cursor: pointer;
}
.flex-item span {
  color: #333;
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
}
.show-profile {
  margin-top: 1rem;
  border: 1px solid rgba(0, 0, 0, 0.3);
  background: #fff;
  border-radius: 10px;
  margin-bottom: 0.5rem !important;
}
.show-profile .box {
  display: flex;
  gap: 0.4rem;
  margin: 0.5rem;
}
.show-profile .posting-title {
  padding: 0.5rem;
  margin-top: 0.4rem;
}
.show-profile .box a {
  font-weight: 600;
  padding-top: 0.3rem;
  font-family: Georgia, "Times New Roman", Times, serif\;;
}
.show-profile .box p {
  font-size: 0.9rem;
  color: rgb(95, 92, 92);
  padding: 0.3rem 0;
}
.show-profile .box a:hover {
  text-decoration: underline;
  color: #0a99da;
}
.show-profile .profile-image {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  cursor: pointer;
}
.show-profile .post-image {
  margin-top: 1rem;
  width: 100%;
  height: 100%;
  object-fit: cover;
  background-position: center;
  background-size: cover;
}
.react {
  margin: 0 0.8rem;
  margin-top: 0.5rem;
  border-top: 1px solid rgba(0, 0, 0, 0.2);
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.react .flex-wrap {
  display: flex;
  align-items: center;
  gap: 0.2rem;
  margin: 0.2rem 0;
  padding: 0.5rem 0.5rem;
}
.react .flex-wrap:hover {
  background: #ccc;
}
</style>
