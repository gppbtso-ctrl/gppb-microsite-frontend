function formatData(data) {
  return data
    ?.map((item) => {
      const commonFields = {
        id: item.id,
      };

      return {
        ...commonFields,
        email: item.email,
        first_name:  item.first_name,
        last_name:  item.last_name,
        agency_name: item.agency_name,
        brief_statement: item.brief_statement,
        date_joined: item.date_joined,
        date_updated: item.date_updated,
        accepted: item.is_active
      };
    })
    .filter(Boolean); // Filter out null values (if any)
}
export default formatData;
