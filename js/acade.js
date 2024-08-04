new Vue({
  el: '#app',
  vuetify: new Vuetify(),
  data: () => ({
    darkTheme: false,
    e1: 1,
    extraCurricularActivities: [
      { id: 1, title: 'Soccer', details: 'Join our soccer team and compete in various leagues and tournaments.' },
      { id: 2, title: 'Music Club', details: 'Participate in our music club to learn and perform various musical instruments.' },
      { id: 3, title: 'Drama Society', details: 'Be a part of our drama society and showcase your acting talents.' },
      { id: 4, title: 'Art Classes', details: 'Explore your creativity through our art classes, including painting and sculpting.' }
    ],
    coCurricularActivities: [
      { id: 1, title: 'Science Club', details: 'Engage in scientific experiments and projects to enhance your knowledge.' },
      { id: 2, title: 'Math Club', details: 'Join our math club to solve challenging problems and participate in competitions.' },
      { id: 3, title: 'Debate Team', details: 'Improve your public speaking skills by joining our debate team.' },
      { id: 4, title: 'Leadership Program', details: 'Develop your leadership skills through our various programs and workshops.' }
    ],
    menuOpen: false,
  }),
  methods: {
    toggleTheme() {
      this.darkTheme = !this.darkTheme;
    },
    scrollToTop() {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    },
    scrollToBottom() {
      window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
    },
    toggleMenu() {
      this.menuOpen = !this.menuOpen;
      const navLinks = document.querySelector('.nav-links');
      navLinks.classList.toggle('active', this.menuOpen);
      document.querySelector('.close-icon').style.display = this.menuOpen ? 'block' : 'none';
      document.querySelector('.menu-icon').style.display = this.menuOpen ? 'none' : 'block';
    },
    handleClickOutside(event) {
      const navLinks = document.querySelector('.nav-links');
      const menuIcon = document.querySelector('.menu-icon');
      const closeIcon = document.querySelector('.close-icon');
      if (this.menuOpen && !navLinks.contains(event.target) && !menuIcon.contains(event.target) && !closeIcon.contains(event.target)) {
        this.menuOpen = false;
        navLinks.classList.remove('active');
        closeIcon.style.display = 'none';
        menuIcon.style.display = 'block';
      }
    }
  }
});
