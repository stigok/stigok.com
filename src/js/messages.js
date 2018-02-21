function sendMessage() {
  req(messageForm.action, {
    name: messageName.value,
    message: messageText.value
  }, function (text, xhr) {
    if (xhr && xhr.status === 201) {
      messageForm.disabled = true
      alert('thanks!\nmessage received!')
      messageForm.reset()
    } else {
      alert('message wasn\'t sent...\n' + text)
      console.error('Failed to send message', arguments)
    }
  })
}

