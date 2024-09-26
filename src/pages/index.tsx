// import Head from 'next/head'
// import Image from 'next/image'
// import { Inter } from 'next/font/google'
// import styles from '@/styles/Home.module.css'


// slide "for you to do" #1
// import Profile from "./qcomps/profile_mistake";
// import MyComp from "./qcomps/firstcomp";
// export default function Home() {
//   return (
//     <div>
//       <Profile />
//       <MyComp />
//     </div>
//   );
// }


// slide "for you to do" #2
// import Bio from "./qcomps/bios";
// import Todos from "./qcomps/todos";
// export default function Home() {
//   return (
//     <div>
//       <Bio />
//       <Todos />
//     </div>
//   );
// }


// slide "for you to do" #3 - Component Props;
// import Profile from "./components/profile_props";
// import Gallery from "./qcomps/gallery_props";
// export default function Home() {
//   return (
//     <div>
//       {/* <Profile /> */}
//       <Gallery />
//     </div>
//   );
// }

// slide "for you to do" #4 - container component/conditional rendering
import PackingList from "./qcomps/props_item";
export default function Home() {
  return (
    <div>
      <PackingList />
    </div>
  );
}
