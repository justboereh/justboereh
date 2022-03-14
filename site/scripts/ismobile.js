export default () => {
  if (
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent.substr(0, 4)
    )
  )
    return true

  return false
}
