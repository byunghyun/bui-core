export interface MenuItemsInterface {
  title: string;
  submenu?: {
    title: string;
    submenu?: {
      title: string;
      submenu?: {
        title: string;
      }[];
    }[];
  }[];
}
