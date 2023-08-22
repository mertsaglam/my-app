import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'

const Booklist = () => {
  return (<section className='Booklist'><Book/>
        <Book/>
        </section>
  )
}

const Book = () => {return (<article className='Book'>
  <Image />
  <Title />
  <Author />
  </article>)}

  const Image = () => (
    <img
      src="https://m.media-amazon.com/images/I/41oihh5M3jL._SY291_BO1,204,203,200_QL40_FMwebp_.jpg"
      alt="Necessary Trouble: Growing Up at Midcentury"
    />
  );
  const Title = () => <h2>Necessary Trouble: Growing Up at Midcentury</h2>;
  const Author = () => <h2>Drew Gilpin Faust </h2>;

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<Booklist />);
