import { Admin, Resource} from "react-admin";
import { Layout } from "./Layout";
import { dataProvider } from "./dataProvider";

import ProductList from "./pages/products/product-list";
import ProductShow from "./pages/products/product-show";
import ProductEdit from "./pages/products/product-edit";
import ProductCreate from "./pages/products/product-create";

import CategoryList from "./pages/categories/categorie-list";
import CategoryShow from "./pages/categories/categorie-show";
import CategoryEdit from "./pages/categories/categorie-edit";
import CategoryCreate from "./pages/categories/categorie-create";

import AttributeList from "./pages/attributes/attribute-list";
import AttributeShow from "./pages/attributes/attribute-show";
import AttributeEdit from "./pages/attributes/attribute-edit";
import AttributeCreate from "./pages/attributes/attribute-create";

import ProductIcon from "@mui/icons-material/Receipt";
import CategoryIcon from "@mui/icons-material/Category";



export const App = () => (
  <Admin layout={Layout} dataProvider={dataProvider}>
    <Resource 
      icon={ProductIcon} 
      name="products" 
      list={ProductList} 
      edit={ProductEdit} 
      show={ProductShow} 
      create={ProductCreate} 
    />
    <Resource 
      icon={CategoryIcon} 
      name="categories" 
      list={CategoryList} 
      edit={CategoryEdit} 
      show={CategoryShow}
      create={CategoryCreate}
    />
    <Resource 
      name="attributes" 
      list={AttributeList} 
      edit={AttributeEdit} 
      show={AttributeShow}
      create={AttributeCreate}
    />
  </Admin>
);
