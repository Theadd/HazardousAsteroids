namespace HazardousAsteroidsApi.ViewModel;

/// <summary>
/// Represents a paginated subset of type T results.
/// </summary>
/// <typeparam name="T">Generic Model type in the Data collection</typeparam>
public class PaginatedItemsViewModel<T> where T : class
{
    
    /// <summary>
    /// Page index of this subset of data results.
    /// </summary>
    public int PageIndex { get; private set; }

    /// <summary>
    /// Number of elements per page.
    /// </summary>
    public int PageSize { get; private set; }

    /// <summary>
    /// Total number of elements present before applying pagination.
    /// </summary>
    public long Count { get; private set; }

    /// <summary>
    /// The Collection of type T results.
    /// </summary>
    public IEnumerable<T> Data { get; private set; }

    internal PaginatedItemsViewModel(int pageIndex, int pageSize, long count, IEnumerable<T> data)
    {
        PageIndex = pageIndex;
        PageSize = pageSize;
        Count = count;
        Data = data;
    }
}
