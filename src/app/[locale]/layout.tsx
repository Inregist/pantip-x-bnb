'use client';

import '@/styles/global.css';

import { Provider } from 'react-redux';

import { store } from './(home)/redux/store';

export default function RootLayout(props: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  // Using internationalization in Client Components

  // The `suppressHydrationWarning` attribute in <body> is used to prevent hydration errors caused by Sentry Overlay,
  // which dynamically adds a `style` attribute to the body tag.

  return (
    <html lang={props.params.locale}>
      <body suppressHydrationWarning>
        <Provider store={store}>
          {props.children}
        </Provider>
      </body>
    </html>
  );
}
