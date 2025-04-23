import Image from 'next/image';

export default function ClubLogoImage({ name, imageUrl }: { name: string; imageUrl?: string }) {
  return (
    <Image
      src={imageUrl || '/placeholder.svg'}
      alt={`${name} 동아리 이미지`}
      className="w-full object-cover"
      width={20}
      height={20}
    />
  );
}
