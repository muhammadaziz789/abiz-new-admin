import { useLocation, useNavigate } from "react-router-dom";
import { ColorConstants } from "../../constants/website";

export default function usePageRouter() {
  const navigate = useNavigate();
  const location = useLocation();
  
  const navigateTo = (path, state) => {
    const link = routeSlug + path;
    

    if (state) {
      navigate(link, { state: state });
      return;
    }
    navigate(link);
  };

  const progmatic = () => navigate(-1);

  const checkPath = (path, status) => {
    const result = path === location.pathname.substring(1)

    if (status === 'icon') {
      return result ? ColorConstants.$primary : ColorConstants.$gray
    }
    
    return result
  }

  return { navigateTo, progmatic, checkPath };
}
