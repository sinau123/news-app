// censor email, ex: 'username@mail.com' to 'u*******@mail.com'
export const censorEmail = (email: string) => {
  return email
    .trim()
    .replace(/^(.)(.*)(@.*)$/, (_, a, b, c) => a + b.replace(/./g, '*') + c);
};

export default censorEmail;
