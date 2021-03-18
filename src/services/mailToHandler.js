import { email } from '../data/profile.json'
const mailtoHandler = () => {
  const subject = 'subject=Hi Ayush'
  const body = 'body=Hi Ayush, I just saw your portfolio and ....'

  const mailToText = [subject, body].join('&')

  window.location = `mailto:${email}?${mailToText}`
}

export default mailtoHandler
