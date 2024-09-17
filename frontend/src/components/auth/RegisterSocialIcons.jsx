export default function RegisterSocialIcons({ icon: Icon, href }) {
  return (
    <a href={href} className="btn btn-circle btn-lg group">
      <Icon className="size-6 transform transition-transform duration-500 group-hover:scale-125" />
    </a>
  );
}
