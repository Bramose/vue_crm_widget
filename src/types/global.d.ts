interface Window {
  ZOHO: {
    embeddedApp: {
      on: (liste: string, data: object) => void;
      init: () => void;
    };
    Record: {
      ButtonPosition: string | null;
      Entity: string | null;
      EntityId: [string] | null;
    };
  };
}
