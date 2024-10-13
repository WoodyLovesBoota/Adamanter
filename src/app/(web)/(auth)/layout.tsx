import AuthLayout from "@/layouts/auth/AuthLayout";

export default function AuthLayoutPage(props: React.PropsWithChildren) {
  const { children } = props;

  return <AuthLayout>{children}</AuthLayout>;
}
