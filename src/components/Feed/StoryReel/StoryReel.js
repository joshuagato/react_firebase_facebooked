import React from 'react';
import './StoryReel.scss';
import Story from './Story/Story';
import { useStateValue } from '../../../context/StateProvider';

function StoryReel() {
  const [{ user }, reducer] = useStateValue();

  return (
    <div className="storyReel">
      <Story 
        image="https://scontent.facc5-1.fna.fbcdn.net/v/t1.0-9/83513293_168778554454250_2525357950193631232_n.jpg?_nc_cat=110&_nc_sid=174925&_nc_eui2=AeGwp7YPCNXR3bUIqaLv5t7lNhzQ2FV7y3A2HNDYVXvLcExH1UAM7NCqr0DOXLh2td0kJXMisXPrGWu2lUeG8fm5&_nc_ohc=Rlm0hQvfZcMAX8FZGwK&_nc_ht=scontent.facc5-1.fna&oh=fc3cdb9727df7069bcfbb4e3fbef05a6&oe=5FA99A6C"
        profileSrc="https://lh3.googleusercontent.com/-iHH3G6n-8_Q/Xq9ay8XQ4TI/AAAAAAAAABw/MGSwDGv6y1YbQ3bGEpKWU2T7dAzeCEmQgCEwYBhgLKtMDAL1OcqxlzCxWZHPFs_YJmnx22xodgqqna8VGViIIklH3JaYDlCfleMV-kuM_nOXTm2UbjlswsxUaWyGYkX1Ycj6PPfc_iEOeSgzlnnhFnzxOdjZ_MCiN1zaAOkJAEXBENJ9efGwVjGzh4EroFRKeGymTZBdLgYfnZPoEVQVKML_708RahDTiT7Sah4lFZsZPqn3qXjnzXWN6Lb10V6jJxGrlF5csBPzMtQ2krBOeSeSqRkbqNRmLiWtUy0_dZ5GvtcBIYupPYdXX2bVRJUI38_dySXPyVjfO9HmKi8ZR-FR2erZDVH1FXN49LUj3BrdNUxY3zsDote91YBIIhzbj5MchVESrn9E9DHUXa6ubH8UcM3rcfZPhYCo8SgUk-Dvhof0p4jPnWK8XMt2zDF5dFMTDYUWgF21M7PSDwt6X4iQ95hEwUPvn6n2UjnGS7jLSYw09P3r6lIlUUCoNt8_sX7106vf63koLqadRWsbJGYoIxG_dyWbGMOjO6FdyWZi9pU3wqo-1UxuM0jbMMLb_8kjFnkR6C87mWHiJuLvUc7ocFXxdmC_6sJt2fyOXfOkam_mSi1MaKDpc9UXUJeBbx2KGud6MQ_ti-TKsscZ-8UJaXKMw766O_AU/w139-h140-p/ProfielPicture-ps.jpg"
        title={user.displayName}
      />
      <Story 
        image="https://scontent.facc5-1.fna.fbcdn.net/v/t1.0-9/83513293_168778554454250_2525357950193631232_n.jpg?_nc_cat=110&_nc_sid=174925&_nc_eui2=AeGwp7YPCNXR3bUIqaLv5t7lNhzQ2FV7y3A2HNDYVXvLcExH1UAM7NCqr0DOXLh2td0kJXMisXPrGWu2lUeG8fm5&_nc_ohc=Rlm0hQvfZcMAX8FZGwK&_nc_ht=scontent.facc5-1.fna&oh=fc3cdb9727df7069bcfbb4e3fbef05a6&oe=5FA99A6C"
        profileSrc="https://lh3.googleusercontent.com/-iHH3G6n-8_Q/Xq9ay8XQ4TI/AAAAAAAAABw/MGSwDGv6y1YbQ3bGEpKWU2T7dAzeCEmQgCEwYBhgLKtMDAL1OcqxlzCxWZHPFs_YJmnx22xodgqqna8VGViIIklH3JaYDlCfleMV-kuM_nOXTm2UbjlswsxUaWyGYkX1Ycj6PPfc_iEOeSgzlnnhFnzxOdjZ_MCiN1zaAOkJAEXBENJ9efGwVjGzh4EroFRKeGymTZBdLgYfnZPoEVQVKML_708RahDTiT7Sah4lFZsZPqn3qXjnzXWN6Lb10V6jJxGrlF5csBPzMtQ2krBOeSeSqRkbqNRmLiWtUy0_dZ5GvtcBIYupPYdXX2bVRJUI38_dySXPyVjfO9HmKi8ZR-FR2erZDVH1FXN49LUj3BrdNUxY3zsDote91YBIIhzbj5MchVESrn9E9DHUXa6ubH8UcM3rcfZPhYCo8SgUk-Dvhof0p4jPnWK8XMt2zDF5dFMTDYUWgF21M7PSDwt6X4iQ95hEwUPvn6n2UjnGS7jLSYw09P3r6lIlUUCoNt8_sX7106vf63koLqadRWsbJGYoIxG_dyWbGMOjO6FdyWZi9pU3wqo-1UxuM0jbMMLb_8kjFnkR6C87mWHiJuLvUc7ocFXxdmC_6sJt2fyOXfOkam_mSi1MaKDpc9UXUJeBbx2KGud6MQ_ti-TKsscZ-8UJaXKMw766O_AU/w139-h140-p/ProfielPicture-ps.jpg"
        title={user.displayName}
      />
      <Story 
        image="https://scontent.facc5-1.fna.fbcdn.net/v/t1.0-9/83513293_168778554454250_2525357950193631232_n.jpg?_nc_cat=110&_nc_sid=174925&_nc_eui2=AeGwp7YPCNXR3bUIqaLv5t7lNhzQ2FV7y3A2HNDYVXvLcExH1UAM7NCqr0DOXLh2td0kJXMisXPrGWu2lUeG8fm5&_nc_ohc=Rlm0hQvfZcMAX8FZGwK&_nc_ht=scontent.facc5-1.fna&oh=fc3cdb9727df7069bcfbb4e3fbef05a6&oe=5FA99A6C"
        profileSrc="https://lh3.googleusercontent.com/-iHH3G6n-8_Q/Xq9ay8XQ4TI/AAAAAAAAABw/MGSwDGv6y1YbQ3bGEpKWU2T7dAzeCEmQgCEwYBhgLKtMDAL1OcqxlzCxWZHPFs_YJmnx22xodgqqna8VGViIIklH3JaYDlCfleMV-kuM_nOXTm2UbjlswsxUaWyGYkX1Ycj6PPfc_iEOeSgzlnnhFnzxOdjZ_MCiN1zaAOkJAEXBENJ9efGwVjGzh4EroFRKeGymTZBdLgYfnZPoEVQVKML_708RahDTiT7Sah4lFZsZPqn3qXjnzXWN6Lb10V6jJxGrlF5csBPzMtQ2krBOeSeSqRkbqNRmLiWtUy0_dZ5GvtcBIYupPYdXX2bVRJUI38_dySXPyVjfO9HmKi8ZR-FR2erZDVH1FXN49LUj3BrdNUxY3zsDote91YBIIhzbj5MchVESrn9E9DHUXa6ubH8UcM3rcfZPhYCo8SgUk-Dvhof0p4jPnWK8XMt2zDF5dFMTDYUWgF21M7PSDwt6X4iQ95hEwUPvn6n2UjnGS7jLSYw09P3r6lIlUUCoNt8_sX7106vf63koLqadRWsbJGYoIxG_dyWbGMOjO6FdyWZi9pU3wqo-1UxuM0jbMMLb_8kjFnkR6C87mWHiJuLvUc7ocFXxdmC_6sJt2fyOXfOkam_mSi1MaKDpc9UXUJeBbx2KGud6MQ_ti-TKsscZ-8UJaXKMw766O_AU/w139-h140-p/ProfielPicture-ps.jpg"
        title={user.displayName}
      />
      <Story 
        image="https://scontent.facc5-1.fna.fbcdn.net/v/t1.0-9/83513293_168778554454250_2525357950193631232_n.jpg?_nc_cat=110&_nc_sid=174925&_nc_eui2=AeGwp7YPCNXR3bUIqaLv5t7lNhzQ2FV7y3A2HNDYVXvLcExH1UAM7NCqr0DOXLh2td0kJXMisXPrGWu2lUeG8fm5&_nc_ohc=Rlm0hQvfZcMAX8FZGwK&_nc_ht=scontent.facc5-1.fna&oh=fc3cdb9727df7069bcfbb4e3fbef05a6&oe=5FA99A6C"
        profileSrc="https://lh3.googleusercontent.com/-iHH3G6n-8_Q/Xq9ay8XQ4TI/AAAAAAAAABw/MGSwDGv6y1YbQ3bGEpKWU2T7dAzeCEmQgCEwYBhgLKtMDAL1OcqxlzCxWZHPFs_YJmnx22xodgqqna8VGViIIklH3JaYDlCfleMV-kuM_nOXTm2UbjlswsxUaWyGYkX1Ycj6PPfc_iEOeSgzlnnhFnzxOdjZ_MCiN1zaAOkJAEXBENJ9efGwVjGzh4EroFRKeGymTZBdLgYfnZPoEVQVKML_708RahDTiT7Sah4lFZsZPqn3qXjnzXWN6Lb10V6jJxGrlF5csBPzMtQ2krBOeSeSqRkbqNRmLiWtUy0_dZ5GvtcBIYupPYdXX2bVRJUI38_dySXPyVjfO9HmKi8ZR-FR2erZDVH1FXN49LUj3BrdNUxY3zsDote91YBIIhzbj5MchVESrn9E9DHUXa6ubH8UcM3rcfZPhYCo8SgUk-Dvhof0p4jPnWK8XMt2zDF5dFMTDYUWgF21M7PSDwt6X4iQ95hEwUPvn6n2UjnGS7jLSYw09P3r6lIlUUCoNt8_sX7106vf63koLqadRWsbJGYoIxG_dyWbGMOjO6FdyWZi9pU3wqo-1UxuM0jbMMLb_8kjFnkR6C87mWHiJuLvUc7ocFXxdmC_6sJt2fyOXfOkam_mSi1MaKDpc9UXUJeBbx2KGud6MQ_ti-TKsscZ-8UJaXKMw766O_AU/w139-h140-p/ProfielPicture-ps.jpg"
        title={user.displayName}
      />
    </div>
  );
};

export default StoryReel;
