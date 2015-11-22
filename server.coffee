render: (req, res, view, data) ->
  if not data.layout
    data.layout = if req.header('X-Requested-With') is 'XMLHttpRequest' then 'layouts/modal'  else 'layouts/default'
  res.render view, data