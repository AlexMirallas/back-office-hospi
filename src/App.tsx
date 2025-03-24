import { Admin, Resource, EditGuesser, ListGuesser, ShowGuesser} from "react-admin";
import { Layout } from "./Layout";
import { dataProvider } from "./dataProvider";
import ProductList from "./pages/products/product-list";
import ProductShow from "./pages/products/product-show";
import ProductEdit from "./pages/products/product-edit";
import CategoryList from "./pages/categories/categorie-list";
import CategoryShow from "./pages/categories/categorie-show";
import AttributeList from "./pages/attributes/attribute-list";
import AttributeShow from "./pages/attributes/attribute-show";
import AttributeEdit from "./pages/attributes/attribute-edit";
import CategoryEdit from "./pages/categories/categorie-edit";

export const App = () => (
  <Admin layout={Layout} dataProvider={dataProvider}>
    <Resource name="products" list={ProductList} edit={ProductEdit} show={ProductShow} />
    <Resource name="categories" list={CategoryList} edit={CategoryEdit} show={CategoryShow}/>
    <Resource name="attributes" list={AttributeList} edit={AttributeEdit} show={AttributeShow}/>
  </Admin>
);
