// Créez un cookie lang égal à 'fr'.
document.cookie = `lang=fr;expires=${new Date('2019-02-06')}`;
docCookies.setItem('lang', 'ES', new Date('2019-02-06'));
// Créez un cookie previewSeen égal à true qui va expirer dans 5 minutes.
docCookies.setItem('previewSeen', true, new Date('2019-02-06'));
console.log('previewSeen', docCookies.getItem('previewSeen'));
// Créez un cookie test égal à 'test' qui va expirer le 31
docCookies.setItem('test', 'test', new Date('2019-02-31'));
// Créez un cookie userId égal à 123 qui sera secure.
docCookies.setItem('userId', '123', new Date('2019-02-31'));
docCookies.setItem('userId', 123);
// Modifiez la valeur du cookie userId à 321.
docCookies.setItem('userId', 321);
// Supprimez le cookie test.
docCookies.setItem('userId', 321, new Date('2000-01-01'));

const user = {
	id: 1,
	name: 'Thibaud'
}
docCookies.setItem('user', JSON.stringify(user));

const myUser = docCookies.getItem('user');
console.log('myUser', myUser);
const parsedUser = Json.parse(myUser);
console.log('parsedUser', parsedUser);

const emails = ['a@ynov.com', 'b@ynov.com' 'c@ynov.com']

DocCookies.setItem('emails', JSON.stringify(emails))
const emailsFromCookies = docCookies.getItem('emails')
const parsedEmails = JSON.parse(emailsFromCookies)


const isAccepted = docCookies.getItem('CookiesAccepted')
console.log('isAccepted', isAccepted);
if (isAccepted && is Accepted === 'true') {
	cookiesBanner.style.display = 'none';
	
} else {
	console.log('Should be visible')
	const cookiesBanner = document.querySelector ('#cookies');
	cookiesBanner.style.dispay = 'block';
}

CookiesBtn.addEventListener ('Click', () => {
	docCookies.setItem('cookiesAccepted', true, new Date('2019-02-15'))
	cookiesBanner.style.display ='none';
})

const ads = {top : 1, bottom: 2};

if (localStorage) {
	localStorage.setItem('greeting', 'Hello World');
	localStorage.setItem('adIds' JSON.stringify(ads));
}

if (sessionStorage) {
	sessionStorage.setItem('greeting', 'Hello World');
	sessionStorage.setItem('adIds' JSON.stringify(ads));
}