let tweetOffset = 0;
let runningCriticalFunction = false;
let imgNum = 1;
async function getTweetsAndInsertHTML() {
  if (runningCriticalFunction) {
    return;
  }
  runningCriticalFunction = true;
  const result = await fetch(
    `https://twitter-backend-6yot.onrender.com/tweet/recent?offset=${tweetOffset}`
  );

  const tweets = await result.json();

  console.log(tweets.data);

  tweetOffset = tweetOffset + tweets.data.length;
  document.querySelector(".news-feed").insertAdjacentHTML(
    "beforeend",
    tweets.data
      .map((tweet) => {
        const date = new Date(tweet.creationDatetime);

        return `<div class="news-feed-post" id=${tweet._id}>
        <div class="left">
            <img src="https://picsum.photos/id/537/300/" width="50px" height="50px" style = "object-fit: cover">
        </div>
        <div class="right">
            <div class="right-upper-main">
        
                <div class="right-upper">
                    <h3>HackerRank</h3>
                    <img src="verified.png" alt="verified" width="18px" height="18px">
                    <span>@hackerrank &middot; ${date.toDateString()} </span>
                </div>
                
            </div>
                <div class="right-lower" id='${tweet._id}'>
                ${tweet.title}
            </div>
            <div class="actions">
                    <div class="impression action-box">
                    <div class="box comment-box">
                    <svg viewBox="0 0 24 24" aria-hidden="true" class="r-4qtqp9 r-yyyyoo r-1xvli5t r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-1hdv0qi">
                    <g>
                      <path d="M8.75 21V3h2v18h-2zM18 21V8.5h2V21h-2zM4 21l.004-10h2L6 21H4zm9.248 0v-7h2v7h-2z"></path>
                    </g>
                  </svg>
                    </div>
                    <span> 4 </span>
                </div>
                <div class="comment action-box">
                    <div class="box comment-box">
                    <svg
                    viewBox="0 0 24 24"
                    class="r-4qtqp9 r-yyyyoo r-1xvli5t r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-1hdv0qi"
                  >
                    <g>
                      <path d="M14.046 2.242l-4.148-.01h-.002c-4.374 0-7.8 3.427-7.8 7.802 0 4.098 3.186 7.206 7.465 7.37v3.828c0 .108.044.286.12.403.142.225.384.347.632.347.138 0 .277-.038.402-.118.264-.168 6.473-4.14 8.088-5.506 1.902-1.61 3.04-3.97 3.043-6.312v-.017c-.006-4.367-3.43-7.787-7.8-7.788zm3.787 12.972c-1.134.96-4.862 3.405-6.772 4.643V16.67c0-.414-.335-.75-.75-.75h-.396c-3.66 0-6.318-2.476-6.318-5.886 0-3.534 2.768-6.302 6.3-6.302l4.147.01h.002c3.532 0 6.3 2.766 6.302 6.296-.003 1.91-.942 3.844-2.514 5.176z"></path>
                    </g>
                  </svg>
                    </div>
                    <span> 4 </span>
                </div>
                <div class="retweet action-box">
                    <div class="box retweet-box">
                    <svg
                    viewBox="0 0 24 24"
                    class="r-4qtqp9 r-yyyyoo r-1xvli5t r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-1hdv0qi"
                  >
                    <g>
                      <path d="M23.77 15.67c-.292-.293-.767-.293-1.06 0l-2.22 2.22V7.65c0-2.068-1.683-3.75-3.75-3.75h-5.85c-.414 0-.75.336-.75.75s.336.75.75.75h5.85c1.24 0 2.25 1.01 2.25 2.25v10.24l-2.22-2.22c-.293-.293-.768-.293-1.06 0s-.294.768 0 1.06l3.5 3.5c.145.147.337.22.53.22s.383-.072.53-.22l3.5-3.5c.294-.292.294-.767 0-1.06zm-10.66 3.28H7.26c-1.24 0-2.25-1.01-2.25-2.25V6.46l2.22 2.22c.148.147.34.22.532.22s.384-.073.53-.22c.293-.293.293-.768 0-1.06l-3.5-3.5c-.293-.294-.768-.294-1.06 0l-3.5 3.5c-.294.292-.294.767 0 1.06s.767.293 1.06 0l2.22-2.22V16.7c0 2.068 1.683 3.75 3.75 3.75h5.85c.414 0 .75-.336.75-.75s-.337-.75-.75-.75z"></path>
                    </g>
                  </svg>
                    </div>
                    <span> 5 </span>
                </div>
                <div class="like action-box">
                    <div class="box like-box">
                    <svg
                    viewBox="0 0 24 24"
                    class="r-4qtqp9 r-yyyyoo r-1xvli5t r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-1hdv0qi"
                  >
                    <g>
                      <path d="M12 21.638h-.014C9.403 21.59 1.95 14.856 1.95 8.478c0-3.064 2.525-5.754 5.403-5.754 2.29 0 3.83 1.58 4.646 2.73.814-1.148 2.354-2.73 4.645-2.73 2.88 0 5.404 2.69 5.404 5.755 0 6.376-7.454 13.11-10.037 13.157H12zM7.354 4.225c-2.08 0-3.903 1.988-3.903 4.255 0 5.74 7.034 11.596 8.55 11.658 1.518-.062 8.55-5.917 8.55-11.658 0-2.267-1.823-4.255-3.903-4.255-2.528 0-3.94 2.936-3.952 2.965-.23.562-1.156.562-1.387 0-.014-.03-1.425-2.965-3.954-2.965z"></path>
                    </g>
                  </svg>
                    </div>
                    <span> 63 </span>
                </div>
                <div class="share action-box">
                    <div class="box share-box">
                    <svg
                    viewBox="0 0 24 24"
                    class="r-4qtqp9 r-yyyyoo r-1xvli5t r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-1hdv0qi"
                  >
                    <g>
                      <path d="M17.53 7.47l-5-5c-.293-.293-.768-.293-1.06 0l-5 5c-.294.293-.294.768 0 1.06s.767.294 1.06 0l3.72-3.72V15c0 .414.336.75.75.75s.75-.336.75-.75V4.81l3.72 3.72c.146.147.338.22.53.22s.384-.072.53-.22c.293-.293.293-.767 0-1.06z"></path>
                      <path d="M19.708 21.944H4.292C3.028 21.944 2 20.916 2 19.652V14c0-.414.336-.75.75-.75s.75.336.75.75v5.652c0 .437.355.792.792.792h15.416c.437 0 .792-.355.792-.792V14c0-.414.336-.75.75-.75s.75.336.75.75v5.652c0 1.264-1.028 2.292-2.292 2.292z"></path>
                    </g>
                  </svg>
                    </div>
                </div>
            </div>
        </div>
        </div>`
      }).join('')
  );
  runningCriticalFunction = false;
}

window.onload = async () => {
  getTweetsAndInsertHTML();
};

document.addEventListener('click', async (event) => {
  if (event.target.classList.contains('tweet-post')) {
    const tweetText = document.querySelector('.write--tweet').value;

    const data = {
      title: tweetText,
      text: 'Random Value',
      userId: '12345',
    };

    const tweetResponse = await fetch(
      'https://twitter-backend-6yot.onrender.com/tweet/create',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      }
    );

    const tweet = await tweetResponse.json();

    if (tweet.status !== 200) {
      alert(tweet.message);
      return;
    }

    document.querySelector('.write--tweet').value = '';
    alert(tweet.message);
  }

  if (event.target.classList.contains('tweet-delete')) {
    if (confirm('Are you sure you want to delete this tweet?')) {
      const tweetId = event.target.getAttribute('data-id');
      const data = {
        tweetId,
        userId: '12345',
      };

      const response = await fetch(
        'https://twitter-backend-6yot.onrender.com/tweet/delete',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data),
        }
      );

      const result = await response.json();

      if (result.status !== 200) {
        alert(result.message);
        return;
      }

      alert('Tweet deleted successfuly');
      document.getElementById(tweetId).remove();
    }
  }

  if (event.target.classList.contains('tweet-edit')) {
    const tweetId = event.target.getAttribute('data-id');

    const span = document.getElementById(tweetId);

    const tweetText = prompt('Enter new tweet text', span.innerText);

    const data = {
      tweetId,
      title: tweetText,
      text: 'Random value',
      userId: '12345',
    };

    const response = await fetch(
      'https://twitter-backend-6yot.onrender.com/tweet/update',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      }
    );

    const result = await response.json();

    if (result.status !== 200) {
      alert(result.message);
      return;
    }

    alert('Updated Successfully');
    span.innerText = tweetText;
  }

  // if(event.target.classList.contains('show_more')) {
  //     getTweetsAndInsertHTML();
  // }
});
