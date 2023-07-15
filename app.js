const unreadMessages = document.querySelectorAll('.unread');
const notification = document.getElementById('notifications');
const markAll = document.getElementById('mark-all');

notification.innerText = unreadMessages.length;

unreadMessages.forEach(message => {
	message.addEventListener('click', () => {
		message.classList.remove('unread');
		const newUnreadMesages = document.querySelectorAll('.unread');
		notification.innerText = newUnreadMesages.length;
	});
});

markAll.addEventListener('click', () => {
	unreadMessages.forEach(message => {
		message.classList.remove('unread');
	});
	const newUnreadMesages = document.querySelectorAll('unread');
	notification.innerText = newUnreadMesages.length;
});
