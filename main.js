const allNotifications = [
  {
    name : 'Mark Webber', avatar:'avatar-mark-webber.webp', action: 'reacted to your recent post', link: 'My first tournament today!', date: '1m ago'
  },
  {
    name : 'Angela Gray', avatar:'avatar-angela-gray.webp', action: 'followed you', link: '', date: '5m ago'
  },
  {
    name : 'Jacob Thompson', avatar:'avatar-jacob-thompson.webp', action: 'has joined your group', link: 'Chess Club', date: '1 day ago'
  },
  {
    name : 'Rizky Hasanuddin', avatar:'avatar-rizky-hasanuddin.webp', action: 'sent you a private message', link: '', date: '5 days ago', message : "Hello, thanks for setting up the Chess Club. I\'ve been a member for a few weeks now and I\'m already having lots of fun and improving my game."
  },
  {
    name : 'Kimberly Smith', avatar:'avatar-kimberly-smith.webp', action: 'commented on your picture', link:'', src : 'assets/images/image-chess.webp', date: '1 week ago', message : ""
  },
  {
    name : 'Nathan Peterson', avatar:'avatar-nathan-peterson.webp', action: 'reacted to your recent post', link: '5 end-game strategies to increase your win rate', date: '2 weeks ago', message : ""
  },
  {
    name : 'Anna Kim', avatar:'avatar-anna-kim.webp', action: 'left the group', link: 'Chess Club', date: '2 weeks ago', message : ""
  }
]

const notificationsContainer = document.querySelector('.accordion');

const renderNotifications = (array) => {
  const notigicationsHTML = array
    .map((item)=> {
      // check if a property defined before rendering it
      let img;
      if(item.src){
        img = `<img src="${item.src}" alt="chess club" class="notification-image" width="47" height="47" />`;
      } else {
        img = '';
      }
      let l;
      if(item.link){
        l = `<span class="link"><a href="">${item.link}</a></span>`;
      } else {
        l = '';
      }
      let msg
      if(item.message){
        msg = `<div class="message"><p>
        ${item.message}
        </p></div>`;
      } else {
        msg = '';
      }
      
      return `<div class="accordion-item">
      <div class="accordion-title unread">
        <div class="avatar"><img src="assets/images/${item.avatar}" alt="${item.name}" width="46" height="46" /></div>
        <div class="notification-content">
          <div class="top">   
            <p><span class="name">${item.name}</span> 
              <span class="action">${item.action}</span>
              ${l}
              <span class="dot"></span>
              </p>${img}
              
          </div>
          <div class="date"><p>${item.date}</p></div>
        </div>
      </div>
      <div class="accordion-body">
        ${msg}
      </div>
      </div>
      `;
    })
    .join("");
    notificationsContainer.innerHTML = notigicationsHTML;
};
renderNotifications (allNotifications);


var accordion = document.getElementsByClassName("accordion-item");

const notificationNumber = document.querySelector('#notification-number');

notificationNumber.innerText = document.querySelectorAll('.unread').length;

for (var i = 0; i < accordion.length; i++) {
  accordion[i].addEventListener("click", function() {
    /* Remove unread class and update the number of unread messages */
    if(this.querySelector('.accordion-title').classList.contains("unread")){
      this.querySelector('.accordion-title').classList.remove("unread");
      notificationNumber.innerText = document.querySelectorAll('.unread').length;
    }
    if(document.querySelectorAll('.unread').length === 0){
      markAllAsRead.classList.add('desabled');
    }
    /* Toggle between hiding and showing the active panel */
    var panel = this.querySelector('.accordion-body');
    panel.classList.toggle("accordion-body-active");

  });
}

// mark all as read 

const markAllAsRead = document.querySelector('#mark-as-read');

markAllAsRead.addEventListener('click', ()=>{
  document.querySelectorAll('.unread').forEach((item) => {
    item.classList.remove("unread");
  });
  notificationNumber.innerText =  0;
  markAllAsRead.classList.add('desabled');
})
