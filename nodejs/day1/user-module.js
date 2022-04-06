/*
* @params
* name: string /\w{3,}
*
* */
const hello = (name = '', birthday) => {
  if (name.length < 3) {
    throw new Error("Name should have more than 2 characters")
  }
  const dateRegex = new RegExp(/(\d{4}[-\\\/]\d{1,2}[-\\\/]\d{1,2})/);
  if (!dateRegex.test(birthday)) {
    throw new Error(`{"${birthday}"} is not a valid date format | valid is: YYYY-MM-DD`);
  }
  const date = new Date(birthday);
  if (date instanceof Date && isNaN(date.getTime())) {
    throw new Error("Invalid date");
  }
  const ageDifMs = new Date() - date.getTime();
  const ageDate = new Date(ageDifMs);
  const age =  Math.abs(ageDate.getUTCFullYear() - 1970);
  return `Hello ${name} ${age}`;
};
module.exports = {
  hello
}
