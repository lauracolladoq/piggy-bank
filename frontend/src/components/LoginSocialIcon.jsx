export default function LoginSocialIcon({ icon, text }) {
  return (
    <a className="btn rounded-full font-normal text-base">
      {icon}
      <p>
        Login with <span className="font-semibold">{text}</span>
      </p>
    </a>
  );
}
