import { useState } from 'react';
import { signIn } from 'next-auth/react';

function SignIn() {
  const [formData, setFormData] = useState({ username: '', password: '' });

  async function handler(e) {
    e.preventDefault();

    const res = await signIn('credentials', {
      username: formData.username,
      password: formData.password,
      redirect: false,
    });

    console.log(res);
  }

  return (
    <>
      <div>
        <form onSubmit={handler}>
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={e =>
              setFormData({ ...formData, username: e.target.value })
            }
          />
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={e =>
              setFormData({ ...formData, password: e.target.value })
            }
          />
          <button type="submit">Sign In</button>
        </form>
      </div>
      <style jsx>{`
        div {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 50%;
          height: 81vh;
          margin: auto;
        }
        form {
          display: flex;
          flex-direction: column;
        }
        input {
          padding: 0.5rem;
        }
        button {
          padding: 1rem;
          border: none;
        }
      `}</style>
    </>
  );

  //   return (
  //     <main>
  //       <button type="button" onClick={() => signIn()}>
  //         ثبت نام
  //       </button>
  //     </main>
  //   );
}

export default SignIn;
