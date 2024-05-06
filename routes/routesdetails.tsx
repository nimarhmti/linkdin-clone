import {
  Briefcase,
  HomeIcon,
  LucideProps,
  MessagesSquare,
  SearchIcon,
  UsersIcon,
} from "lucide-react";

export interface routesModel {
  label: string;
  href: string;
  icon: React.ForwardRefExoticComponent<
    Omit<LucideProps, "ref"> & React.RefAttributes<SVGSVGElement>
  >;
  style: string;
}

export class routesDetails {
  Home: routesModel = {
    href: "/dashboard",
    icon: HomeIcon,
    label: "Home",
    style: "icon",
  };

  Network: routesModel = {
    href: "/network",
    icon: UsersIcon,
    label: "Network",
    style: "hidden icon  md:flex",
  };
  Job: routesModel = {
    href: "/jobs",
    icon: Briefcase,
    label: "Jobs",
    style: "hidden icon  md:flex",
  };
  Message: routesModel = {
    href: "/message",
    icon: MessagesSquare,
    label: "Message",
    style: "icon",
  };
}
