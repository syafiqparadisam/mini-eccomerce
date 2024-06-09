module.exports = (cookie) => {
	const spliting = cookie.split(';');
	console.log(spliting)
  const a = {
    value: spliting[0].slice(9, spliting[0].length),
	maxAge: spliting[1].slice(9, spliting[1].length),
    path: spliting[2].slice(6, spliting[2].length),
    exp: spliting[3].slice(9, spliting[3].length),
    httpOnly: spliting[4].trimStart(),
    secure: spliting[5].trimStart(),
    sameSite: spliting[6].slice(10, spliting[6].length),
  }
  console.log(a)
  return a
}