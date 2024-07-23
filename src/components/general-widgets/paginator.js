import { Button, IconButton, Typography } from "@material-tailwind/react";
import { useState, useEffect } from "react";


const Pagination = ({ page, totalPages, onPageChange, totalEntries }) => {
  const [pageRange, setPageRange] = useState([]);

  useEffect(() => {
    const generatePageRange = () => {
      const maxSiblings = 1;
      const ellipsis = '...';
    
      const range = [];
      const totalDisplayPages = 4;
    
      if (totalPages <= totalDisplayPages) {
        for (let i = 1; i <= totalPages; i++) {
          range.push(i);
        }
      } else {
        if (page <= totalDisplayPages - maxSiblings) {
          // Display first pages without ellipsis
          for (let i = 1; i <= totalDisplayPages - 1; i++) {
            range.push(i);
          }
          range.push(ellipsis, totalPages);
        } else if (page >= totalPages - maxSiblings) {
          // Display last pages without ellipsis
          range.push(1, ellipsis);
          for (let i = totalPages - totalDisplayPages + 2; i <= totalPages; i++) {
            range.push(i);
          }
        } else {
          // Display pages with ellipsis in between
          range.push(1, ellipsis);
          const start = Math.max(1, page - maxSiblings);
          const end = Math.min(totalPages, page + maxSiblings);
          for (let i = start; i <= end; i++) {
            range.push(i);
          }
          range.push(ellipsis, totalPages);
        }
      }
    
      setPageRange(range);
    };

    generatePageRange();
  }, [page, totalPages]);

  return (
    <div className="flex items-center justify-center md:justify-end mt-2.5 gap-4 w-full">
      {/* <Typography variant="small">
        Total Entries:{totalEntries ? totalEntries : 0}
      </Typography> */}
      {/* Previous button */}
      <div className="flex flex-row">
        <Button
          variant="text"
          size="sm"
          onClick={() => onPageChange(page - 1)}
          disabled={page === 1}
          className=" border-gray-700 drop-shadow-md"
        >
          <Typography className=" text-black text-xs">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor"
      aria-hidden="true" class="w-4 h-4">
      <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"></path>
    </svg>
          </Typography>
        </Button>
        <div className="flex">
          {/* Page numbers with dots */}
          {pageRange.map((pageNumber, index) => (
            <span
              key={index}
              onClick={() => {
                if (pageNumber !== '...') { // Check if not ellipsis
                  onPageChange(pageNumber)
                }
              }}
              style={{
                cursor: pageNumber !== '...' ? "pointer" : "not-allowed",
                fontWeight: pageNumber === page ? "bold" : "normal",
                margin: "0 2.5px", // Adjust spacing
              }}
            >
              <IconButton
                variant={page == pageNumber ? "" : "text"}
                size="sm"
                className="drop-shadow-md"
                color="black"
              >
                <Typography className={`text-xs ${page == pageNumber ? "text-white" : "text-black"}`}>{pageNumber}</Typography>
              </IconButton>
            </span>
          ))}
        </div>
        {/* Next button */}
        <Button
          onClick={() => onPageChange(page + 1)}
          disabled={page === totalPages}
          variant="text"
          size="sm"
          className="  drop-shadow-md"
        >
          <Typography className=" text-xs text-black"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor"
      aria-hidden="true" class="w-4 h-4">
      <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"></path>
    </svg></Typography>
        </Button>
      </div>
    </div>
  );
};

export default Pagination;