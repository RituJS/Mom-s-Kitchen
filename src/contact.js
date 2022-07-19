function renderContact() {
  const contactContent = document.createElement("div");

  const contactsTitle = document.createElement('h2')
  contactContent.append(contactsTitle)
  contactsTitle.textContent = "Contact-US";

  const contactsDetails = document.createElement('div')
  contactContent.appendChild(contactsDetails)

  const phone = document.createElement('p')
  phone.textContent = '9999988888'

  const email = document.createElement('p')
  email.textContent = 'customersupport@moms.com'

  contactsDetails.append(phone, email)
  contactContent.classList.add('container')
  return contactContent;
}

export { renderContact };
