import {useEffect, useState} from "react";
import {useNavigate, useSearchParams} from "react-router-dom";

export const useGetPaginationData = (total) => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  const [page, setPage] = useState(0);
  const [pageSize, setPageSize] = useState(0);

  const onChangePagination = (page, pageSize) => {
    setPage(page);
    setPageSize(pageSize);

    navigate({
      search: `?page=${page}&pageSize=${pageSize}`
    });
  }

  useEffect(() => {
    const ps = +searchParams.get('pageSize');
    setPage(+searchParams.get('page'));
    setPageSize(ps > 100 ? 100 : ps);
  }, [total, searchParams]);

  return [page, pageSize, onChangePagination];
}