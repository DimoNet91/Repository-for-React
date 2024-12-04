import Logo from "../Logo/Logo";
import UserMenu from "../UserMenu/UserMenu";

export default function AppBar() {
  return (
    <header>
      <UserMenu />
      <Logo />
    </header>
  );
}
