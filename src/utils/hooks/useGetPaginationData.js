import {useEffect, useState} from "react";
import {useNavigate, useSearchParams} from "react-router-dom";

export const useGetPaginationData = (total) => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  const [page, setPage] = useState(0);
  const [pageSize, setPageSize] = useState(0);

  const onChangePagination = (p, ps) => {
    const newP = ps === pageSize ? p : 1
    navigate({search: `?page=${newP}&pageSize=${ps}`});
    window.scrollTo(0, 0);
  }

  useEffect(() => {
    const ps = +searchParams.get('pageSize');
    setPage(+searchParams.get('page') || 1);
    setPageSize(ps > 100 ? 100 : ps || 10);
  }, [total, searchParams]);

  return [page, pageSize, onChangePagination];
}