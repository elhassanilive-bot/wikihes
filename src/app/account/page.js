import AccountSettingsShell from "@/components/account/AccountSettingsShell";

export const metadata = {
  title: "حسابي",
  robots: { index: false, follow: false },
  alternates: { canonical: "/account" },
};

export default function AccountPage() {
  return <AccountSettingsShell />;
}
