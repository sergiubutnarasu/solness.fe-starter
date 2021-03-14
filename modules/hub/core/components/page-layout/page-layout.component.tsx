import { Layout } from "@solness/ui";
import React, {
  FunctionComponent,
  ReactNode,
  useEffect,
  useMemo,
  useState,
} from "react";
import { useSecurityContext } from "~/modules/security";
import Menu from "../menu";

export interface Props {
  children: ReactNode;
}

const PageLayout: FunctionComponent<Props> = ({ children }) => {
  const { getSession } = useSecurityContext();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const checkSession = async () => {
      const session = await getSession();

      if (!session) {
        window.location.href = "/login";
      } else {
        setIsLoading(false);
      }
    };

    checkSession();
  }, [getSession, setIsLoading]);

  if (isLoading) {
    return null; // TODO - display loading
  }

  return <Layout menu={<Menu />}>{children}</Layout>;
};

export default PageLayout;
