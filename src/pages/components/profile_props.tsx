import { AvatarProps } from "@/types/avatar";

/**
 * What is the meaning of the input parameter of the function Avatar?
 * --> The input parameter of the function Avatar is a props object with 2 fields: person and size.
 * What is the meaning of the attributes in <Avatar /> in relation to the function Avatar?
 * --> The attributes in <Avatar /> are the props object with 2 fields: person and size.
 */

export function Avatar({ person, size = 100 }: AvatarProps) {
  return (
    <img
      className="avatar"
      src={'https://i.imgur.com/' + person.imageId + 's.jpg'}
      alt={person.name}
      width={size}
      height={size}
    />
  );
}

export default function Profile() {
  return (
    <div>
      <Avatar
        person={{ name: 'Woon sen', imageId: 'OKS67lh' }}
        size={200} />
      <Avatar
        person={{ name: 'Ron Ayah', imageId: 'YfeOqp2' }}
        size={150} />
      <Avatar
        person={{ name: 'Pani Dom', imageId: '1bX5QH6' }} />
    </div>
  );
}