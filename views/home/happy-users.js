import Image from 'next/image';

const HappyUser = ({ styles }) => {
  return (
    <div className="mt-4 d-flex align-items-center">
      {lovedBy.map((user, k) => (
        <Image
          key={k}
          src={user.img}
          width={30}
          height={30}
          className={`${styles.img_round} ${styles.loved_img}`}
          alt="asd"
        />
      ))}

      <p className="mb-0 ms-3">Loved by 100,000+ happy users</p>
    </div>
  );
};
export default HappyUser;
const lovedBy = [
  {
    img: 'https://source.unsplash.com/user/wsanter/100x100',
  },
  {
    img: 'https://source.unsplash.com/user/wsanter/100x100',
  },
  {
    img: 'https://source.unsplash.com/user/wsanter/100x100',
  },
  {
    img: 'https://source.unsplash.com/user/wsanter/100x100',
  },
  {
    img: 'https://source.unsplash.com/user/wsanter/100x100',
  },
];
