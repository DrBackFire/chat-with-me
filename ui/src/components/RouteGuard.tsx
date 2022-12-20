// import { useState, useEffect } from "react";
// import { useRouter } from "next/router";
// import { useSession } from "next-auth/react";
// // import useUser from "../hooks/useUser";

// export { RouteGuard };

// function RouteGuard({ children }: any) {
//   const router = useRouter();
//   const [authorized, setAuthorized] = useState(false);

//   const { data: session }: any = useSession();

//   useEffect(() => {
//     // on initial load - run auth check
//     authCheck(router.asPath);

//     // on route change start - hide page content by setting authorized to false
//     const hideContent = () => setAuthorized(false);
//     router.events.on("routeChangeStart", hideContent);

//     // on route change complete - run auth check
//     router.events.on("routeChangeComplete", authCheck);

//     // unsubscribe from events in useEffect return function
//     return () => {
//       router.events.off("routeChangeStart", hideContent);
//       router.events.off("routeChangeComplete", authCheck);
//     };
//   }, []);

//   function authCheck(url: string) {
//     // redirect to login page if accessing a private page and not logged in
//     const publicPaths = ["/login"];
//     const path = url.split("?")[0];

//     console.log(session);

//     if (!session?.user?.id && !publicPaths.includes(path)) {
//       setAuthorized(false);
//       router.push({
//         pathname: "/login",
//         query: { returnUrl: router.asPath },
//       });
//     } else {
//       setAuthorized(true);
//     }
//   }

//   return authorized && children;
// }
